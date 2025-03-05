<script>
  import Icon from "@iconify/svelte";
</script>

<div class="Footer">
  <div class="topfoot">
    <div class="contactus">
      <div class="titlecontact">Contact Us</div>
      <div class="item">
        <div class="logo"><img src="/logo.png" alt="logo" /></div>
        <div class="name">EasyWay Credit Limited</div>
      </div>
      <div class="item">
        <div class="icon"><Icon icon="tabler:location" /></div>
        <div class="namex">
          TRIO COMPLEX THIKA ROAD <br /> BEHIND GARDEN CITY MALL.
        </div>
      </div>
      <div class="item">
        <div class="icon"><Icon icon="ic:baseline-phone" /></div>
        <div class="namex">
          +254734641449 <br />
          +254 786189755<br />
          +254100974188
        </div>
      </div>
      <div class="item">
        <div class="icon"><Icon icon="icon-park-outline:mail-download" /></div>
        <div class="namex">info@easywayscredit.co.ke</div>
      </div>
    </div>
    <div class="social-media">
      <div class="socialtitle">Social Media</div>
      <div class="socialmediaitems">
        <div class="socialitem"><Icon icon="logos:facebook" /></div>
        <div class="socialitem"><Icon icon="prime:twitter" /></div>
        <div class="socialitem"><Icon icon="lineicons:instagram" /></div>
        <div class="socialitem"><Icon icon="devicon:linkedin" /></div>
      </div>
    </div>
    <div class="links">
      <div class="linkstitle">Useful links</div>
      <div class="linkitems">
        <div class="linkitem"><a href="/dashboard">Dashboard</a></div>
        <div class="linkitem"><a href="/careers">Career</a></div>
        <div class="linkitem"><a href="/about">Branches</a></div>
        <div class="linkitem"><a href="/history">History</a></div>
        <div class="linkitem"><a href="/contact">Contact Us</a></div>
      </div>
    </div>

    <div class="contact-form">
      <div class="formtitle">Reach Us</div>
      <div>
        <form>
          <input type="Text" placeholder="Fullname" />
          <input type="Email" placeholder="Email" />
          <textarea placeholder="Message" rows="5" cols="12"></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  </div>
  <div class="bottomfoot">
    <div class="foot">Copyright 2025, All Right Reserved</div>
    <div class="footitems">
      <div class="foottem"><Icon icon="logos:facebook" /></div>
      <div class="footitem"><Icon icon="prime:twitter" /></div>
      <div class="footitem"><Icon icon="lineicons:instagram" /></div>
      <div class="footitem"><Icon icon="devicon:linkedin" /></div>
    </div>
  </div>
</div>

<style>
  .Footer {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;
  }
  .topfoot {
    background-color: rgb(31, 31, 31);
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    padding-bottom: 100px;
    box-sizing: border-box;
    justify-content: space-around;
  }

  .contactus {
    display: flex;
    flex-direction: column;
  }
  .titlecontact {
    color: white;
    font-size: 19px;
    font-weight: 700;
    line-height: 22.8px;
  }
  .logo {
    height: 80px;
    width: 80px;
  }
  .logo img {
    height: 65px;
    width: 65px;
  }
  .name {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 27px;
    color: rgb(216, 213, 213);

    margin-right: 5px;
  }
  .namex {
    font-size: 16px;
    line-height: 27px;
    color: rgb(216, 213, 213);
  }
  .item {
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 10px;
    gap: 12px;
  }
  .icon {
    font-size: 18px;
  }
  .social-media {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .socialmediaitems {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .socialitem {
    font-size: 22px;
    color: white;
  }
  .socialtitle {
    color: white;
    font-size: 19px;
    font-weight: 700;
    line-height: 22.8px;
  }
  .linkstitle {
    color: white;
    font-size: 19px;
    font-weight: 700;
    line-height: 22.8px;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .linkitems {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .linkitem {
    font-size: 16px;
    line-height: 20px;
    color: rgb(138, 143, 242);
  }
  .linkitem a {
    text-decoration: none;
    color: rgb(138, 143, 242);
  }
  .formtitle {
    color: white;
    font-size: 19px;
    font-weight: 700;
    line-height: 22.8px;
  }
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .contact-form form input {
    background-color: rgb(46, 46, 46);
    height: 44px;
    width: 200px;
    border: none;
    padding: 3px 12px;
    font-size: 17px;
    color: white;
  }
  .contact-form form textarea {
    background-color: rgb(46, 46, 46);
    padding: 13px 12px;
    border: none;
    font-size: 17px;
    color: white;
  }
  .contact-form form button {
    background-color: rgb(55, 64, 176);
    font-size: 16px;
    width: 160px;
    color: white;
    padding: 17px;
    border: none;
    font-weight: 700;
  }

  .bottomfoot {
    background-color: rgb(40, 40, 40);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 50px;
  }
  .foot {
    font-size: 16px;
    color: rgb(131, 131, 131);
    line-height: 27.2px;
  }
  .footitems {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }
  .footitem {
    font-size: 14px;
    color: white;
  }
  @media (max-width: 768px) {
    .topfoot {
      display: flex;
      flex-direction: column;

      gap: 70px;
      padding-top: 55px;
      padding-left: 30px;
      box-sizing: border-box;
    }
    .titlecontact{
        margin-bottom: 15px;
    }
    
    .socialtitle{
        margin-bottom: 15px;
    }
    .linkstitle{
        margin-bottom: 15px;
    }
    .formtitle{
        margin-bottom: 15px;
    }
    .contact-form form {
      gap: 20px;
    }
    .contact-form form input {
      width: 78%;
    }
    .contact-form form textarea {
      width: 78%;
    }
    .bottomfoot{
        display: flex;
        flex-direction: column;
        gap:7px;
        padding: 12px 0px;
    }


  }
</style>
