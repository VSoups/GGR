const reviewList = document.querySelector('.review-list');
reviewList.addEventListener('click', edit);


function edit(evt) {
    const btn = evt.target;
    const reviewId = evt.target.dataset.review;
    if (!reviewId) return;
    console.log(evt);
    const el = document.getElementById(`${reviewId}-form`);
    
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
    btn.innerText = btn.innerText === 'edit' ? 'cancel' : 'edit';

}