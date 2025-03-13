<script>
  import { goto } from "$app/navigation";

    export let src = "/business.png";
    export let title = "Business loans";
    export let description = "Business loan is a business credit facility that allows a business to borrow against its future sales.";
    export let Turnaround = "";
    
    
    </script>
    <div class="service" style="scroll-behaviour:smooth">
        <div class="service-left"><img src={src} alt = {title}/></div>
        <div class = service-right>
            <div class="title">{title}</div>
            <div class="description">{description}</div>
            {#if Turnaround}
            <div class="turnaround"> Turn around Time:{Turnaround}</div>
            {/if}
            <div class="divapply"><button class=" Apply"><a href="/contact">Apply Now</a></button></div>
        </div>
        
    </div>
        
    
    <style>
        .service{
            
            display: flex;
            flex-direction: column;
            font-family: "Open Sans", sans-serif;
            padding: 25px 25px;
            background-color: white;
            gap: 10px;
            
        }
        .service-left{
            width: 72px;
            height: 70px;
            align-self: center;
           
        }
        .service-left img{
            object-fit: scale-down;
            width: 70px;
            height: 68px;
        }
        .service-right{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .title{
            font-size: 21px;
            font-weight: 600;
            line-height: 37.1px;
            color: rgb(24, 39, 248);
            text-align: center;
            

        }
        .description{
            font-size: 18px;
            font-weight: 400;
            line-height: 27.2px;
            color: rgb(122, 122, 122);
            text-align: center;

        }
        .turnaround{
            
            font-size: 18px;
            font-weight: 400;
            line-height: 27.2px;
            color: black;
            align-self: center;

        }
        .divapply{
            display: flex;
            
            align-self: center;
        }
        .Apply{
            border-radius: 90px;
            font-size: 15px;
            padding: 10px;
            background-color: blue;
            border: none;
            
        }
        .Apply a{
            color: white;
            text-decoration: none;
            font-weight: 600;

        }
        .Apply:hover{
            background-color: gray;
        }
        @media (max-width:768px){
            .service{
                gap: 35px;
                
              
            }
            .service-left img{
                width:90px;
                height: 89px;

            }
            .title{
                margin-bottom: 20px;
                font-size: 40px;
            }
            .turnaround{
                text-align: center;
            }
        
            
            
        }
        

    </style>