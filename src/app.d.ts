declare global {
	namespace App {
	  // Uncomment and extend only what you need
	  interface PageData {
		seo: {
		  title: string;
		  description: string;
		  keywords: string;
		  ogImage: string;
		};
	  }
	  
	  // Keep these commented until needed
	  // interface Error {}
	  // interface Locals {}
	  // interface PageState {}
	  // interface Platform {}
	}
  }
  
  export {};