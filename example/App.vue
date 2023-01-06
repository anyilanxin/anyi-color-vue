<template>
  <div>
    <Switch @change="handleChangeTheme">
      <template #checked> 黑色 </template>
      <template #unchecked> 明亮 </template>
    </Switch>
  </div>
  <div id="app">
    <AnYiBpmnPreviewInstance
      :theme="theme"
      ref="diagramInstanceDomRef"
      tagId="Activity_1s3ocxk:e63351bb-faaa-11ec-9f3a-0242ac1f090f"
    />
  </div>
</template>
<script lang="ts" setup>
  import { Switch } from '@arco-design/web-vue';
  import instancesdata from './instancesdata.json';
  import { ref, onMounted } from 'vue';
  const theme = ref('light');
  const diagramInstanceDomRef = ref();
  async function handleChangeTheme(value: boolean) {
    if (value) {
      theme.value = 'dark';
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      theme.value = 'light';
      document.body.removeAttribute('arco-theme');
    }
  }
  onMounted(() => {
    diagramInstanceDomRef.value.viewInstance(instancesdata.data);
  });
</script>
