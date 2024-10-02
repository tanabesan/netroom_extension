// フレ検索
const userList = document.getElementById('user_list2');

  function filterUsers(suN) {
    Array.from(userList.getElementsByClassName('li_user clearfix')).forEach($user => {
      $user.style.display = $user.getElementsByClassName('user_name')[0].textContent.includes(suN) || suN === "" ? '' : 'none';
    });
  }

  function addSearchInput() {
    if (!document.getElementById('suNe')) {
      const suNe = document.createElement('input');
      suNe.type = 'text';
      suNe.id = 'suNe';
      suNe.placeholder = '検索...';
      userList.prepend(suNe);
      suNe.addEventListener('input', () => filterUsers(suNe.value));
    }
  }

  new MutationObserver(() => addSearchInput()).observe(userList, { childList: true, subtree: true });
  addSearchInput();
