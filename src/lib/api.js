import { applyAction } from "$app/forms";
import { json } from "@sveltejs/kit";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * @param {any} formData
 */
export async function submitOrder(formData){
    try{
        const response = await fetch('https://easywayscredit.co.ke/api/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (response.ok){
            const result = await response.json();
            return{success:true, data:result};
        }else{
            const error = await response.json();
            return{success:false, error:error.message || 'Submission failed'};
        }
    } catch(error){
        return{success:false, error:'An error occured while submitting'};
    }
}
/**
 * @param {any} careerData
 */
export async function submitCareer(careerData){
    try {
        const response = await fetch('https://easywayscredit.co.ke/api/api/careers',{
            method: 'POST',
            headers: {
                'Content-type':'appliction/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(careerData)
        });
        if(response.ok){
            const result = await response.json();
            return{success:true, data:result};
        }else{
            const error = await response.json();
            return{success:false, error:error.message || 'Submission failed'};
        }
        
    } catch (error) {
        return {success:false, error:'An error occured while submitting'}
        
    }
}
/**
 * @param {any} newsData
 */
export async function submitNews(newsData){
    const formData = new FormData();
    formData.append('title', newsData.title);
    formData.append('snippet', newsData.snippet);
    formData.append('content', newsData.content);
    formData.append('author', newsData.author);
    if (newsData.image) formData.append('image', newsData.image);

    try {
        const response = await fetch('https://easywayscredit.co.ke/api/api/news',{
            method: 'POST',
            body: formData
          
        });
        if(response.ok){
            const result = await response.json();
            return{success:true, data:result};
        }else{
            const error = await response.json();
            return{success:false, error:error.message || 'Submission failed'};
        }
        
    } catch (error) {
        return {success:false, error:'An error occured while submitting'}
        
    }
}