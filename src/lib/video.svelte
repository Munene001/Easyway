<div class="creditpitch">
  <div class="heading">EASYWAYS CREDIT PITCH</div>
  <div class="desc">A brief intro</div>
  <button><a href="/easyway-credit" aria-label="video">Watch Video</a></button>
</div>

<style>
  .creditpitch {
    background-color:black;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .heading {
    font-family: "Open Sans", sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 57.2px;
    color: rgb(255, 255, 255);
  }
  .desc {
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(255, 255, 255);
  }
  button {
    font-size: 21px;
    padding: 10px;
    background-color: blue;
    border: none;
    border-radius: 5px;
  }

  button a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .creditpitch {
      height: 280px;
     
    }
    .heading {
      font-size: 34px;
      font-weight: 700;
      line-height: 37.2px;
      color: rgb(255, 255, 255);
      text-align: center;
    }
  }
</style>
