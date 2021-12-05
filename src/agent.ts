import {
  BlockEvent,
  HandleBlock,
  Finding,
  FindingType,
  FindingSeverity,
} from 'forta-agent'


let blockNum = 0

const handleBlock: HandleBlock = async (blockEvent: BlockEvent): Promise<Finding[]> => {
  const findings = []

  if (blockNum % 10 === 0) {
    findings.push(Finding.fromObject({
      name: 'Debug block alert',
      description: `Debug alert for block number ${blockEvent.block.number}`,
      alertId: `DEBUG-LIDO-ALERT-FOR-BLOCK`,
      severity: FindingSeverity.Unknown,
      type: FindingType.Unknown,
    }))
  }

  blockNum++

  return findings
};

export default {
  handleBlock,
  // handleTransaction,
}
