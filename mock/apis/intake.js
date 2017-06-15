import faker from 'faker'

const selectedPriority = faker.random.uuid()
const selectedRequestType = faker.random.uuid()
const selectedEnv = faker.random.uuid()
const selectedPlatform = faker.random.uuid()
const selectedDataCenter = faker.random.uuid()
const selectedSku = faker.random.uuid()
const selectedActionType = faker.random.uuid()
const generateIntake = {
  'intake-values': {
    title: 'Server Title',
    projectName: 'Project Server from Names',
    priority: selectedPriority,
    requestType: selectedRequestType,
    description: 'Sample Description',
    machineDetails: [{
      id: faker.random.uuid(),
      actionType: selectedActionType,
      dataCenter: selectedDataCenter,
      environment: selectedEnv,
      namingPattern: 'xxx-x-x-x-x-x',
      platform: selectedPlatform,
      projectGoLive: '2017-06-27',
      requestBy: '2017-06-27',
      serviceName: 'Machine from server',
      sku: selectedSku,
    }]
  },
  'intake-form': {
    priorityOps: [ {
      id: selectedPriority,
      label: 'p0'
    }, {
      id: faker.random.uuid(),
      label: 'p1'
    }, {
      id: faker.random.uuid(),
      label: 'p2'
    }, {
      id: faker.random.uuid(),
      label: 'p3'
    } ],
    requestTypeOps: [ {
      id: faker.random.uuid(),
      label: 'Organic Capacity'
    }, {
      id: selectedRequestType,
      label: 'New Project Capacity'
    }, {
      id: faker.random.uuid(),
      label: 'Other'
    } ],
    actionTypeOps: [ {
      id: selectedActionType,
      label: 'provisioning'
    }, {
      id: faker.random.uuid(),
      label: 'disposal'
    }, {
      id: faker.random.uuid(),
      label: 'de-provisioning'
    } ],
    environmentOps: [ {
      id: selectedEnv,
      label: 'Dev'
    }, {
      id: faker.random.uuid(),
      label: 'Staging'
    }, {
      id: faker.random.uuid(),
      label: 'Prod'
    } ],
    platformOps: [ {
      id: faker.random.uuid(),
      label: 'IAAS'
    }, {
      id: selectedPlatform,
      label: 'Bare Metal'
    }, {
      id: faker.random.uuid(),
      label: 'Kubernetes'
    }, {
      id: faker.random.uuid(),
      label: 'Other'
    } ],
    dataCenterOps: [ {
      id: selectedDataCenter,
      label: 'VE'
    }, {
      id: faker.random.uuid(),
      label: 'SV2'
    }, {
      id: faker.random.uuid(),
      label: 'VSV1'
    }, {
      id: faker.random.uuid(),
      label: 'ESV5'
    }, {
      id: faker.random.uuid(),
      label: 'TNY2'
    }, {
      id: faker.random.uuid(),
      label: 'CLA1'
    } ],
    skuOps: [ {
      id: faker.random.uuid(),
      label: 'R630'
    }, {
      id: faker.random.uuid(),
      label: 'R620'
    }, {
      id: faker.random.uuid(),
      label: 'R640'
    }, {
      id: faker.random.uuid(),
      label: 'R650'
    }, {
      id: selectedSku,
      label: 'R230'
    }, {
      id: faker.random.uuid(),
      label: 'R730'
    }, ],
  }
}

module.exports = generateIntake
