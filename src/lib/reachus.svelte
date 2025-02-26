<script>
  import Icon from "@iconify/svelte";
</script>

<div class="Reachus">
  <div class="details">
    <div class="detail">
      <div class="symbol"><Icon icon="ic:baseline-phone" /></div>
      <div class="title">Phone</div>
      <div class="description">
        For any questions or support, reach out to us through the contact info
        listed on our page.
      </div>
      <div class="detailitem">
        +254 734641449 <br />
        +254 786189755<br />
        +254 100974188
      </div>
    </div>
    <div class="detail">
      <div class="symbol"><Icon icon="icon-park-outline:mail-download" /></div>
      <div class="title">Email</div>
      <div class="description">
        Drop us a line anytime via the email slot provided in our contact
        section below.
      </div>
      <div class="detailitem">info@easywayscredit.co.ke</div>
    </div>
    <div class="detail">
      <div class="symbol"><Icon icon="tabler:location" /></div>
      <div class="title">Location</div>
      <div class="description">
        Trio complex Thike road behind Garden city mall. P.O BOX 10499-00400 <br
        /> Nairobi
      </div>
      <div class="detailitem"><a href="https://www.google.com/maps/place/The+Trio+Complex/@-1.2357771,36.873923,1479m/data=!3m1!1e3!4m6!3m5!1s0x182f155f3c9e2241:0xe63a84bd70d17c93!8m2!3d-1.2355713!4d36.8765036!16s%2Fg%2F11qzj83shg!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"> View Location on Map</a></div>
    </div>
  </div>
  <div class="input">
    <div class="commence">
      <div class="comm">Leave us your info</div>
      <div class="ence">and we will get back to you</div>
      <div class="ic"><Icon icon="garden:dash-stroke-16" /></div>
    </div>
    <div class="form">
      <form>
        <div class="namer">
          <input type="text" placeholder="Firstname" class="firstname"/>
          <input type="text" placeholder="Lastname"  class="lastname"/>
        </div>
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="10" cols="10"></textarea>
        <button type="submit">Submit Now</button>
      </form>
    </div>
  </div>
</div>
<div class="location">
  <iframe
    title="TRIO COMPLEX THIKA ROAD BEHIND GARDEN CITY MALL"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.1981758518427!2d36.87392867384815!3d-1.23557129875265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f155f3c9e2241%3A0xe63a84bd70d17c93!2sThe%20Trio%20Complex!5e1!3m2!1sen!2ske!4v1740477391137!5m2!1sen!2ske"
    width="100%"
    height="400px"
    style="border:0;"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<div>
    <div class="socialmediaitems">
        <div class="socialitem"><Icon icon="ic:outline-facebook" /></div>
        <div class="socialitem"><Icon icon="garden:twitter-fill-12" /></div>
        <div class="socialitem"><Icon icon="ri:instagram-fill" /></div>
        <div class="socialitem"><Icon icon="uil:linkedin" /></div>
      </div>

</div>

<style>
  .Reachus {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;
  }
  .details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 45px;
    padding-top: 45px;
    padding-bottom: 45px;
    box-sizing: border-box;
    gap: 20px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .symbol {
    font-size: 40px;
  }
  .title {
    font-size: 26px;
    font-weight: 600;
    line-height: 31.2px;
  }
  .description {
    font-size: 18px;
    font-weight: 400;
    line-height: 27.2px;
    color: rgb(102, 99, 99);
  }
  .detailitem {
    font-size: 16px;
    color: rgb(49, 55, 135);
    line-height: 27.2px;
  }
  .detailitem a {
    color: rgb(49, 55, 135);
  }
  .commence {
    display: flex;
    flex-direction: column;
  }
  .comm {
    font-size: 39px;
    line-height: 46.8px;
    color: rgb(55, 64, 176);
    font-weight: 600;
    text-align: center;
  }
  .ence {
    font-size: 19px;
    line-height: 32.3px;
    color: rgb(116, 116, 116);
    text-align: center;
  }
  .ic {
    align-self: center;
    font-size: 59px;
    margin-top: 0px;
  }
  .input {
    display: flex;
    flex-direction: column;
    background-color:rgb(231, 224, 224);
    align-items: center;
    padding: 50px 0px;
    box-sizing: border-box;
    gap: 5px;
  }
  .form form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 720px;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border: 2px solid rgb(55, 64, 176);
    outline: none;
  }

  .form form input {
    height: 62px;
    padding: 5px 10px;
    font-size: 17px;
    background-color: white;
    border: none;
  }

  .form form textarea {
    font-size: 17px;
    padding: 15px 10px;
    background-color: white;
    border: none;
  }
  .form form textarea:focus {
    border: 2px solid rgb(55, 64, 176);
  }

  .namer {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
  }
  .namer input {
    width: 100%;
  }
  .form button {
    background-color: rgb(55, 64, 176);
    height: 62px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }
  .form ::placeholder {
    font-size: 17px;
    color: rgb(66, 63, 63);
  }
  .socialmediaitems{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    padding: 50px 0px;

  }
  .socialitem{
    color: black;
    font-size: 30px;


  }
  @media(max-width:768px){
    .input{
        width: 100%;
        padding: 50px 0px;
    }
    .details{
        display: flex;
        flex-direction: column;
        gap:70px;
    }
    
    .form form{
        width: 100%;
        gap: 39px;
        padding: 0px 20px;
        box-sizing: border-box;
    }
    .comm{
        font-size: 32px;
        line-height: 40px;
    }
    .location iframe{
        height: 550px;
        
    }
    .socialmediaitems{
        gap:20px;
        padding: 20px 0px;
    }
    .socialitem{
        font-size: 24px;
        
    }
   

    
   
  }
</style>
