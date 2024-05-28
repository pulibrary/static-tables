export default {
  props: {
    lastPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pageSize: 100,
      page: 1
    };
  },
  emits: ['pageSizeChange', 'pageChange'],
  methods: {
    setPageSize(size) {
      this.$emit('pageSizeChange', size);
    },
    setPage(page) {
      this.$emit('pageChange', page);
      this.page = page;
    },

    availablePages() {
      const min = this.page < 5 ? 1 : this.page - 4;
      const max =
        this.lastPage <= this.page + 4 ? this.lastPage : this.page + 4;
      const length = max - min + 1;

      return Array.from({ length: length }, (x, i) => i + min);
    }
  },

  template: `<div class="paging">Show <a href="#" id="size-5" v-on:click="setPageSize(5)">5</a> | <a href="#" id="size-10" v-on:click="setPageSize(10)">10</a> | <a href="#" id="size-20" v-on:click="setPageSize(20)">20</a> | <a href="#" id="size-40" v-on:click="setPageSize(40)">40</a> | <a href="#" id="size-60" v-on:click="setPageSize(60)">60</a> results per page.</div>
    <slot></slot>
    <div class="container paging">
        <div class="btn-group">
        <button v-if="page !== 1" v-on:click="setPage(1)" type="button" class="btn btn-outline-dark">&lt;&lt; first</button>
        <button v-if="page !== 1" v-on:click="setPage(page - 1)" type="button" class="btn btn-outline-dark">&lt; previous</button>
        <div v-for="pageNumber, index in availablePages()" class="btn-group">
            <button v-if="index === 0 && pageNumber !== 1" class="btn btn-outline-dark" disabled>...</button>
            <button v-on:click="setPage(pageNumber)" type="button" class="btn btn-outline-dark" :class="{ active: pageNumber === page}">{{pageNumber}}</button>
            <button v-if="index === availablePages().length - 1 && pageNumber !== lastPage" type="button" class="btn btn-outline-dark" disabled>...</button>
        </div>
        <button v-if="page !== lastPage" v-on:click="setPage(page + 1)" type="button" class="btn btn-outline-dark">next &gt;</button>
        <button v-if="page !== lastPage" v-on:click="setPage(lastPage)" type="button" class="btn btn-outline-dark">last &gt;&gt;</button>
        </div>
    </div >`
};
