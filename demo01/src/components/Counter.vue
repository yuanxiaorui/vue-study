<template>
    <div>
        <button @click="counter++">您点击了：{{counter}}次</button>
    </div>
</template>
<script>
export default {
    // data: function() {
    //     return {
    //         counter: 0
    //     }
    // },
    data: {
        counter:0
    }
}
</script>
