document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector('.navigation');

    function handleScroll() {
        if (window.scrollY === 0) {
            navigation.classList.remove('attached');
        } else {
            navigation.classList.add('attached');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
