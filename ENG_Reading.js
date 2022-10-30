const light = document.querySelector('.light');
const para = document.getElementsByClassName('paragraph');
const selc = document.getElementsByClassName('selc');
const subj = document.querySelector('.subject');
const change_1 = document.getElementsByClassName('change-1');
const change_2 = document.getElementsByClassName('change-2');
const change_3 = document.getElementsByClassName('change-3');
light.addEventListener('click',function(){
    if(subj.classList.contains('colorTitle')){
        subj.classList.remove('colorTitle');
    }
    else
        subj.classList.add('colorTitle');
    for(let i = 0 ; i<change_1.length;i++){
        if(change_1[i].classList.contains('backgroundBody'))
            change_1[i].classList.remove('backgroundBody');
        else
            change_1[i].classList.add('backgroundBody');
    }
    for(let i = 0 ; i<change_2.length;i++){
        if(change_2[i].classList.contains('backgroundSelection'))
            change_2[i].classList.remove('backgroundSelection');
        else
            change_2[i].classList.add('backgroundSelection');
    }
    for(let i = 0 ; i<change_3.length;i++){
        if(change_3[i].classList.contains('borderParagraph'))
            change_3[i].classList.remove('borderParagraph');
        else
            change_3[i].classList.add('borderParagraph');
    }
})

selc[0].addEventListener('click',function(){
    para[0].style.display='block';
    para[1].style.display='none';
})
selc[1].addEventListener('click',function(){
    para[1].style.display='block';
    para[0].style.display='none';
})