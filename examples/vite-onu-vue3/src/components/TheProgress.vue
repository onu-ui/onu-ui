<script setup lang='ts'>
const format = percentage => (percentage === 100 ? 'Full' : `${percentage}%`)
const percentage = ref(20)
const percentage2 = ref(0)
const customColor = ref('#409eff')
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
function customColorMethod(percentage: number) {
  if (percentage < 30)
    return '#909399'

  if (percentage < 70)
    return '#e6a23c'

  return '#67c23a'
}
function increase() {
  percentage.value += 10
  if (percentage.value > 100)
    percentage.value = 100
}
function decrease() {
  percentage.value -= 10
  if (percentage.value < 0)
    percentage.value = 0
}

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
</script>

<template>
  <OCard title="Progress">
    <div class="space-y-2">
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50" />
        <o-progress :percentage="100" :format="format" not-text-color />
        <o-progress :percentage="100" status="success" />
        <o-progress :percentage="100" status="warning" />
        <o-progress :percentage="50" status="error" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="70" stroke-width="xs" />
        <o-progress :percentage="100" status="success" stroke-width="sm" />
        <o-progress :percentage="80" status="warning" stroke-width="md" />
        <o-progress :percentage="50" status="error" stroke-width="lg" />
        <o-progress :percentage="40" :stroke-width="20" />
        <o-progress :percentage="70" :stroke-width="30" :text-inside="true" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="percentage" :color="customColor" />
        <o-progress :percentage="percentage" :color="customColorMethod" />
        <o-progress :percentage="percentage" :color="customColors" />
        <o-progress :percentage="percentage" :color="customColors" />
        <div>
          <o-button @click="decrease">
            +
          </o-button>
          <o-button @click="increase">
            -
          </o-button>
        </div>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress type="circle" :percentage="0" />
        <o-progress type="circle" :percentage="25" />
        <o-progress type="circle" :percentage="100" status="success" />
        <o-progress type="circle" :percentage="70" status="warning" />
        <o-progress type="circle" :percentage="50" status="error" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress type="dashboard" :percentage="20" :color="customColors" />
        <o-progress type="dashboard" stroke-width="lg" :percentage="percentage2" :color="customColors" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50" :indeterminate="true" />
        <o-progress :percentage="100" :format="format" :indeterminate="true" />
        <o-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
        <o-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" />
        <o-progress :percentage="50" status="error" :indeterminate="true" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50">
          <o-button text type="primary">
            Content
          </o-button>
        </o-progress>
        <o-progress :percentage="50" :text-inside="true" :stroke-width="20" status="error">
          <span>Content</span>
        </o-progress>
        <o-progress type="circle" :percentage="100" status="success">
          <o-button type="success" rounded-full>
            <template #icon>
              <div i-carbon-checkmark-filled />
            </template>
          </o-button>
        </o-progress>
        <o-progress :percentage="80" type="dashboard">
          <template #default="{ percentage: percentageValue }">
            <span class="block mt-10px text-28px">{{ percentageValue }}%</span>
            <span class="block mt-10px text-12px">Progressing</span>
          </template>
        </o-progress>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50" color="primary" />
        <o-progress :percentage="50" color="secondary" />
        <o-progress :percentage="100" color="success" status="success" />
        <o-progress :percentage="100" color="warning" />
        <o-progress :percentage="50" color="error" />
        <o-progress :percentage="100" color="info" />
        <o-progress :percentage="80" stroke-width="lg" color="linear-gradient(to right, #0c02ba, #00ff95)" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50" stroke-width="lg" color="primary" bg-color="primary" />
        <o-progress :percentage="50" stroke-width="lg" color="secondary" bg-color="secondary" />
        <o-progress :percentage="60" stroke-width="lg" color="success" bg-color="success" />
        <o-progress :percentage="30" stroke-width="lg" color="warning" bg-color="warning" />
        <o-progress :percentage="50" stroke-width="lg" color="error" bg-color="error" />
        <o-progress :percentage="80" stroke-width="lg" color="info" bg-color="info" />
      </div>
      <div fsc gap-2 flex-wrap>
        <o-progress :percentage="50" stroke-width="lg" color="primary" bg-color="primary" striped />
        <o-progress :percentage="50" stroke-width="lg" color="secondary" bg-color="secondary" striped />
        <o-progress :percentage="60" stroke-width="lg" color="success" bg-color="success" striped />
      </div>
    </div>
  </OCard>
</template>
