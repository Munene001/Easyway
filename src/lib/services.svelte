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
            flex-direction: row;
            font-family: "Open Sans", sans-serif;
            margin-right: 12px;
            
        }
        .service-left{
            width: 72px;
            height: 70px;
            margin-right: 15px;
           
        }
        .service-left img{
            object-fit: scale-down;
            width: 70px;
            height: 68px;
        }
        .service-right{
            display: flex;
            flex-direction: column;
        }
        .title{
            font-size: 21px;
            font-weight: 600;
            line-height: 37.1px;
            color: rgb(24, 39, 248);

        }
        .description{
            font-size: 18px;
            font-weight: 400;
            line-height: 27.2px;
            color: rgb(122, 122, 122);

        }
        .turnaround{
            
            font-size: 18px;
            font-weight: 400;
            line-height: 27.2px;
            color: black;
            margin-top: 10px;

        }
        .divapply{
            display: flex;
            margin-top: 15px;
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
                display: flex;
                gap: 20px;
                
              
            }
            .service-left img{
                width:90px;
                height: 89px;

            }
            .title{
                margin-bottom: 20px;
                font-size: 40px;
            }
        
            
            
        }
        

    </style>