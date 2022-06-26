<template>
    <nav>
        <h2 v-text="title"></h2>
    </nav>
</template>

<script>
export default {
    props: ['title']
}

</script>

<style>
nav{
    background-color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 15px;
    padding-left: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
}

</style>