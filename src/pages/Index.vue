<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card
        class="col-12 col-sm-6 col-lg-4 q-gutter-xl"
        flat
        square
      >
        <q-card-section class="echarts q-pa-none">
          <PieChart style="min-height: 350px;" />
        </q-card-section>
      </q-card>
      <q-card
        class="col-12 col-sm-6 col-lg-4 q-gutter-xl"
        flat
        square
      >
        <q-card-section class="echarts q-pa-none">
          <BarChart style="min-height: 350px;" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import PieChart from 'components/Charts/PieChart';
import BarChart from 'components/Charts/BarChart';

export default {
  name: 'Index',
  data() {
    return {};
  },
  components: {
    PieChart,
    BarChart,
  },
};
</script>
