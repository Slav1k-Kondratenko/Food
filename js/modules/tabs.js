function tabs({parentSelector, tabsSelector, tabsContentSelector, activeClass}) {
    const tabsParent = document.querySelector(parentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide'); 
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);

    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;