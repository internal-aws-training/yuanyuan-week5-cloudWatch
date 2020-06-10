# Basic

## 1. CloudWatch 是什么？我们为什么要使用CloudWatch？

- AWS CloudWatch用于`实时监控`AWS服务以及在AWS服务中运行的应用程序
- 我们通过CloudWatch收集和跟踪`来自AWS服务的指标`，用这些指标衡量的相关资源和应用程序.
  - 比如, 通过CloudWatch 全面地了解资源使用率、应用程序性能和运行状况等.
  - [发布 CloudWatch 指标的 AWS 服务](https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)
- 可以创建警报监监视这些指标，当超出阈值时，发送警报(SNS/email notification)或者对所监控的资源自动进行更改(auto scaling)。
- 此外, 我们可以创建自定义控制面板，以显示有关自定义应用程序的指标，并显示我们选择的指标的自定义集合。

总结: CloudWatch主要由Metrics、Alarm、Statics组成

## 2. CloudWatch中的metrics是什么？包括哪些种类？我们可以如何使用metrics？

### 1) metrics是CloudWatch的基本构建模块
### 2) CloudWatch 包含的种类有: 
```
- 实例指标
- CPU 积分指标
- 基于 Nitro 的实例的 Amazon EBS 指标
- 状态检查指标
- 流量镜像指标
- 使用情况指标
```
(可以用指标维度来优化上上述指标)

不同的资源有不同的监控指标, 可以用`aws cloudwatch list-metrics` 列出资源对应的监控指标
例如, 列出EC2的监控指标
```
aws cloudwatch list-metrics --namespace AWS/EC2
```

对EC2 的监控指标有
```
CPUCreditBalance
CPUCreditUsage
CPUSurplusCreditBalance
CPUSurplusCreditsCharged
CPUUtilization
DiskReadBytes
DiskReadOps
DiskWriteBytes
DiskWriteOps
MetadataNoToken
NetworkIn
NetworkOut
NetworkPacketsIn
NetworkPacketsOut
StatusCheckFailed
StatusCheckFailed_Instance
StatusCheckFailed_System
```

## 3. CloudWatch Events是什么？可以应用在哪些场景？
- Rules
- Event Buses
## 4. 相关概念理解：metrics，periods，namespace，count，dimensions，statistics

# Practice
