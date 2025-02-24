<script>
  import Icon from "@iconify/svelte";
  export let icon = "codicon:workspace-trusted";
  export let title = "Honesty";
  export let description =
    "We are committed to being truthful, transparent, and ethical in all aspects of our business operations.";
</script>

<div class="values">
    <div class="icon"><Icon icon = {icon}/></div>
    <div class="title">{title}</div>
    <div class = desc>{description}</div>

</div>

<style>
  .values {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding: 50px 20px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap:5px;

  }
  .icon{
    font-size: 60px;
    color:rgb(49, 55, 135);
  }
  .title{
    color: rgb(241,125,68);
    font-size: 22px;
    line-height: 36px;
    font-weight: 700;
    
  }
  .desc{
    font-size: 16px;
    line-height: 27.2px;
    color: rgb(23, 26, 77)

  }

  
</style>
