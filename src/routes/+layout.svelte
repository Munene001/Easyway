
<script lang="ts">
  export let data: App.PageData;
</script>

<svelte:head>
  <title>{data?.seo?.title || "Easyways Limited"}</title>
  <meta name="description" content={data?.seo?.description || "Nairobi-based microfinance."} />
  <meta name="keywords" content={data?.seo?.keywords || "Microfinance, Loans"} />
  <meta property="og:title" content={data?.seo?.title || "Easyways Limited"} />
  <meta property="og:description" content={data?.seo?.description || "Nairobi-based microfinance."} />
  <meta property="og:image" content={data?.seo?.ogImage || "/logo.png"} />
  <meta property="og:type" content="website" />
</svelte:head>

<slot />