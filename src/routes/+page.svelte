<script>
    import Headerlite from "$lib/headerlite.svelte";
    import Header from "$lib/header.svelte";
    import Services from "$lib/services.svelte";
    
   
    </script>
    <Headerlite/>
    
    
    <Header/>
    <div class = prodtitle>Our Products</div>
    <div class = "products">
        
    <Services Turnaround = " Under 6 hours"/>
    <Services src = "/car-loan.png" title ="Logbook Loans" description = "Logbook loan also known as logbook lending, are secured loans using your vehicle’s logbook." Turnaround = " Within 24 hours"/>
    <Services src = "/salary.png" title = "Salary Loans" description = "A Salary Advance is a short-term loan advanced to a salaried customer depending on the bank’s profile of them, to help them meet their emergency need.
    " Turnaround = " Under 6 Hours"/>
    <Services src = "/stock-investment.png" title ="Other Services" description = "We have working capital and asset finance that support all types of businesses." />
    
    </div>
    <style>
        .products{
            width: 100%;
            padding: 30px 15px;
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
        }
        .prodtitle{
            font-size: 44px;
             font-weight: 600;
             line-height: 53px;
             font-family: "Open Sans", sans-serif;
             display: flex;
             justify-content: center;
             margin-top: 20px;
             color: rgb(122,122,122);
        }
        @media (max-width:768px){
            .products{
                display: flx;
                flex-direction: column;
                padding: 15px 23px;
                gap :60px;
            }
            .prodtitle{
                color: rgb(122,122,122);
                margin-top: 3px;
                font-size: 22px;
            }
            

        }
        </style>
    
