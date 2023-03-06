// import dayjs from 'dayjs'
export default {
    methods: {
        getDateText() {
            let greet = (() => {
              let hour = new Date().getHours();
              let timeRange = [
                { 早上好: [7, 11] },
                { 中午好: [12, 13] },
                { 下午好: [14, 17] },
                { 晚上好: [18, 22] }, 
                { 深夜的问候: [23, 2 + 24] },
                { 凌晨好: [3, 6] }
              ];
              let text = timeRange.filter(item => {
                let [min, max] = Object.values(item)[0];
                if (hour <= 2) {
                  hour += 24;
                }
                return hour <= max && hour >= min;
              });
              console.log(hour, text, Object.keys(text[0]));
              return Object.keys(text[0]) || "今日好";
            })();
            let names = [
              '兄弟，',
              '朋友，',
              '有缘人,',
            ];
            let [max, min] = [names.length, 0];
            let r = Math.floor(Math.random() * (max - min) + min);
            let texts=names[r]+greet
            return texts;
          },
    }
}