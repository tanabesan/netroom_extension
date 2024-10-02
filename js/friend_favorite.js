// フレお気に入り
    const storagePrefix = 'starStatus_';
    const userList = document.getElementById('user_list2');
    const processedElements = new Set();
    const originalPositions = new Map();

    function updateStars() {
        const onlineElements = userList.querySelectorAll('.online, .online_1');
        const clearfix = userList.querySelector('.clearfix');

        onlineElements.forEach((element, index) => {
            if (processedElements.has(element)) return;

            const liElement = element.closest('li');
            const storageKey = `${storagePrefix}${index}`;
            let starStatus = localStorage.getItem(storageKey) || '☆';
            const star = document.createElement('span');
            star.textContent = starStatus;
            star.style.fontSize = '18px';
            star.style.marginRight = '5px';
            star.style.cursor = 'pointer';

            if (!originalPositions.has(liElement)) {
                originalPositions.set(liElement, liElement.nextSibling);
            }

            star.addEventListener('click', () => {
                starStatus = star.textContent === '☆' ? '★' : '☆';
                star.textContent = starStatus;
                localStorage.setItem(storageKey, starStatus);

                if (starStatus === '★' && clearfix) {
                    clearfix.parentNode.insertBefore(liElement, clearfix.nextSibling);
                } else {
                    const originalPosition = originalPositions.get(liElement);
                    if (originalPosition) {
                        userList.insertBefore(liElement, originalPosition);
                    } else {
                        userList.appendChild(liElement);
                    }
                }
            });

            element.insertAdjacentElement('beforebegin', star);
            processedElements.add(element);

            if (starStatus === '★' && clearfix) {
                clearfix.parentNode.insertBefore(liElement, clearfix.nextSibling);
            }
        });
    }

    const observer = new MutationObserver((mutations) => {
        let needsUpdate = false;

        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                needsUpdate = true;
                break;
            }
        }

        if (needsUpdate) {
            updateStars();
        }
    });

    if (userList) {
        observer.observe(userList, { childList: true, subtree: true });
        updateStars();
    }
