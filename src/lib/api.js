import { applyAction } from "$app/forms";
import { json } from "@sveltejs/kit";

/**
 * @param {any} formData
 */
export async function submitOrder(formData){
    try{
        const response = await fetch('http://127.0.0.1:8000/api/accounts', {
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
        const response = await fetch('http://127.0.0.1:8000/api/careers',{
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
    try {
        const response = await fetch('http://127.0.0.1:8000/api/news',{
            method: 'POST',
            headers: {
                'Content-type':'appliction/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(newsData)
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