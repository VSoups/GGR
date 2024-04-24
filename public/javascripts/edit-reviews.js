const reviewList = document.getElementById('profile-reviews');
reviewList.addEventListener('click', edit);


function edit(evt) {
    console.log('button pressed');
    const btn = evt.target;
    const reviewId = evt.target.dataset.review;
    if (!reviewId) return;
    // console.log(evt);
    const el = document.getElementById(`${reviewId}-form`);
    // add second listener for profile page
    
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
    btn.innerText = btn.innerText === 'edit' ? 'cancel' : 'edit';

}