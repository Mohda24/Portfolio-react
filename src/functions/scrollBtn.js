export default function handleScrollBtn() {
    let scroolBreakPoint = 600;
    let scrollBtn = document.querySelector('.scroll-btn');
    scrollY >= scroolBreakPoint
        ? scrollBtn.classList.add('scrollActive')
        : scrollBtn.classList.remove('scrollActive')
}