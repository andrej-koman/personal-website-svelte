<script>
    import { fade } from 'svelte/transition';
</script>

<div class="footer"> 
    <i class="fa-regular fa-copyright"></i>
    <space />
    <span>2023, Andrej Koman</span>
</div>

<style>
    .footer {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
    }
    .fa-copyright {
        margin-right: 5px;
    }
</style>