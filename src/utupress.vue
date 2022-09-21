<template>
    <ul class="utupress">
        <li v-for="item in items" :key="item.href">
            <a v-show="item.href && item.href.length>0 && !item.active" :href="item.href">{{item.text}}</a>
            <span v-show="item.active && item.active === true">{{item.text}}</span>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    }
};
</script>
  
<style scoped>
ul.utupress {
    padding: 10px 16px;
    list-style: none;
    background-color: #eee;
}

ul.utupress li {
    display: inline;
    font-size: 18px;
}

ul.utupress li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
}

ul.utupress li a {
    color: #0275d8;
    text-decoration: none;
}

ul.utupress li a:hover {
    color: #01447e;
    text-decoration: underline;
}
</style>