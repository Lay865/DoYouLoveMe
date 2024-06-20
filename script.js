const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const image = document.querySelector(".image")

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
    question.innerHTML = "谢谢";
    image.src="https://gifdb.com/images/high/cute-i-love-you-498-x-418-gif-pf0vppghj1tohwl8.gif"
    noBtn.remove();
    yesBtn.remove();
});

noBtn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

    noBtn.style.position = "absolute";
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
