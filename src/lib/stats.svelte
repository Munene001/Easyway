<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    // Function to animate counting up to a target number
    function animateNumber(
        element: HTMLElement,
        start: number,
        end: number,
        duration: number,
        suffix: string = ''
    ): void {
        let startTimestamp: number | null = null;

        const step = (timestamp: number): void => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString() + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }

    // Function to start animation
    function startNumberAnimation(): void {
        const numberElements = document.querySelectorAll<HTMLElement>('.numbers > div > div:first-child');
        const targets = [
            { value: 3, suffix: '' },
            { value: 75, suffix: 'M+' },
            { value: 10, suffix: 'M+' },
            { value: 1500, suffix: '+' }
        ];

        numberElements.forEach((element, index) => {
            animateNumber(element, 0, targets[index].value, 2000, targets[index].suffix);
        });
    }

    // Scroll-based detection
    onMount(() => {
        if (!browser) return; // Exit if not running in the browser

        const overall = document.querySelector<HTMLElement>('.overall');
        if (!overall) {
            console.warn('No .overall element found');
            return;
        }

        let hasAnimated = false;

        const checkVisibility = (): void => {
            const rect = overall.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            // Trigger when the top of .overall enters the viewport and at least 50% is visible
            const isVisible = rect.top >= 0 && rect.top <= windowHeight && rect.bottom > windowHeight * 0.5;

            console.log('Top:', rect.top, 'Bottom:', rect.bottom, 'Window Height:', windowHeight, 'Is Visible:', isVisible);

            if (isVisible && !hasAnimated) {
                console.log('Triggering animation');
                startNumberAnimation();
                hasAnimated = true;
                window.removeEventListener('scroll', checkVisibility);
            }
        };

        // Use requestAnimationFrame for initial check to ensure DOM is rendered
        requestAnimationFrame(() => {
            checkVisibility();
        });

        // Add scroll listener
        window.addEventListener('scroll', checkVisibility);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    });
</script>

<div class="overall">
    <div class="numbers">
        <div class="stats">
            <div class="stats1">0</div> <!-- Start at 0 -->
            <div class = "statstext">Experienced Consultants</div>
        </div>
        <div class="stats">
            <div class="stats1">0</div>
            <div class = "statstext">Disbursement So Far</div>
        </div>
        <div class="stats">
            <div class="stats1">0</div>
            <div class = "statstext">Asset Based</div>
        </div>
        <div class="stats">
            <div class="stats1">0</div>
            <div class = "statstext">Active Customers</div>
        </div>
    </div>
</div>

<style>
    .overall {
        width: 100%;
        font-family: "Open Sans", sans-serif;
        
    }

    .numbers {
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

   
    .stats1{
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        color: rgb(49, 55, 135)

        
    }
    .stats{
        text-align: center;
    }
    .statstext{
        font-size: 20px;
        font-weight: 600;
        color:rgb(140, 140, 140);
        line-height: 30px;
        
    }
    @media (max-width:768px){
        .numbers{
            display: flex;
            flex-direction: column;
            height: 520px;
        }
        
    }

   
</style>