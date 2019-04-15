import engine from '@/plugins/axios';

export default {
  // 数据中心-近期数据接口-头部统计
  GetRecentStatisticalData() {
    return engine.get('/api/InfoCenter/RecentStatisticalData');
  },
};
