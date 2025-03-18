<script>
  import { submitNews } from "./api.js";

  /**
   * @type {string}
   */
  let title;
  /**
   * @type {string}
   */
  let snippet;
  /**
   * @type {string}
   */
  let content;
  /**
   * @type {string}
   */
  let author;
  let date;

  let successMessage = "";
  let generalError = "";

  /**
   * @param {{ preventDefault: () => void; target: any; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    successMessage = "";
    generalError = "";

    const form = event.target;
    if (!form.checkValidity()) {
      alert("required fields have not been filled");
      return;
    }
    const newsData = {
      title,
      snippet,
      content,
      author,
    };
    const result = await submitNews(newsData);
    if (result.success) {
      successMessage = "News has been submitted successfully";
      title = "";
      snippet = "";
      content = "";
      author = "";
    } else {
      generalError = result.error || "Failed to submit news";
      alert(generalError);
    }
  }
</script>

<div class="Newspost" id = "news">
  <div class="PostNews">POST NEWS</div>
  <form onsubmit={handleSubmit}>
    <div>
      <label for="title">Title:</label>
      <input type="text" placeholder= "use capitalletters"  name="title" bind:value={title} required />
    </div>
    <div>
      <label for="author">Author:</label>
      <input
        type="text"
        placeholder="name of writer"
        id="author"
        name="author"
        bind:value={author}
        required
      />
    </div>
    <div class="textareablock">
    <div class="block">
      <label for="snippet">Snippet:</label>
      <textarea
        placeholder="Write a brief paragraph to gain attention of reader"
        id="snippet"
        name="snippet"
        bind:value={snippet}
        required
      ></textarea>
    </div>
    <div class="block">
      <label for="content">Content:</label>
      <textarea
        placeholder="Write the whole blog"
        id="content"
        name="content"
        bind:value={content}
        required
      ></textarea>
    </div>
    </div>
    <button type="submit">Make Post</button>
    {#if successMessage}
      <p class="success">{successMessage}</p>
    {/if}
    {#if generalError}
      <p class="error">{generalError}</p>
    {/if}
  </form>
</div>

<style>
  .Newspost {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .PostNews {
    display: flex;
    align-self: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: 700;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "Open Sans", sans-serif;
  }
  label {
    font-size: 17px;
    line-height: 25px;
    font-weight: 500;
    color: rgb(1, 1, 19);
  }
  input {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  input[type="text"] {
    height: 37px;
    width: 290px;
  }
  .textareablock{
    display: flex;
    flex-direction: row;
    padding: 20px 20px;
    gap: 40px;

  }
  #snippet {
    width: 350px;
    height: 180px;
    padding: 15px 15px;
    font-size: 15px;
    font-weight: 400;
  }
  #content{
    width: 700px;
    height: 350px;
    padding: 15px 15px;
    font-size: 15px;
    font-weight: 400;

  }
  .block{
    display: flex;
    flex-direction: column;
    gap: 5px;

  }

  .error {
    color: red;
    font-size: 16px;
    margin-top: 0px;
    align-self: center;
  }
  .success {
    color: green;
    font-size: 18px;
    margin-top: 0px;
    align-self: center;
  }
  button {
    background-color: rgb(55, 64, 176);
    color: white;
    border: none;
    width: 100px;
    font-size: 16px;
    font-weight: 500;

    line-height: 30px;
  }
  @media(max-width:768px){
    .textareablock{
        display: flex;
        flex-direction: column;
    }
    #snippet{
        width: 300px;
    }
    #content{
        width: 300px;
    }
    .textareablock{
        padding: 0 0;
    }
    form{
        gap:15px
    }
    

  }
</style>
