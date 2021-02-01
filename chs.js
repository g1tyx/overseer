/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    '[search]': '[搜索]',
    'Start Game': '开始游戏',
    'Statistics': '统计',
    'Settings': '设置',
    'Reliability': '安全性',
    'Overseer': '首脑',
    'Core idle': '内核闲置',
    'Core #': '内核 #',
    'Scan files': '扫描文件',
    'Searching for files': '搜索文件',
    'No files to display': '没有文件可显示',
    'Close': '关闭',
    'Cores obtained': '获得的内核',
    ' failed': '失败',
    ' solved': '成功',
    ' obtained': '获得',
    ' scanned': '扫描的',
    ' purchased': '购买的',
    ' discovered': '发现的',
    ' gain': '获得',
    ' core': '内核',
    ' hacked': '黑客',
    ' purged': '清除',
    ' quarantined': '隔离',
    ' cancelled': '取消',
    ' completed': '完成',
    ' overclocked': '超频的',
    'Main color': '主色',
    'Reset settings': '重置选项',
    'Restart game': '重玩游戏',
    'Example text': '示例文字',
    'Accent color': '强调性文字颜色',
    'No cores are currently available': '当前没有可用内核',
    'files and found': '文件并找到',
    'Scanned': '已扫描',
    'Purge files': '清除文件',
    'vulnerabilities': '漏洞',
    'reliability': '安全性',
    'Primary cores cleared for additional': '清除了主要内核以获取更多',
    'overclocking': '超频',
    'Multithreading': '多线程',
    'files and gained': '文件并获得',
    'Core speeds (': '内核速度 (',
    'and recycling': '和回收',
    'Purged': '清除',
    'allow other threats to escape': '让其他威胁消失',
    'If left unchecked these files may damage the integrity of the quarantine drives and': '如果不选中，这些文件可能会破坏隔离驱动器的完整性',
    'limited time span': '有限的时间跨度',
    'Quarantine Breach Detected': '检测到隔离漏洞',
    'Real time quarantine monitoring has picked up an unknown number of files executing cracking functions!': '实时隔离监控发现数量未知的文件正在执行破解功能!',
    'Run counter-measures': '采取对策',
    'There is a': '有一个',
    'vulnerability': '漏洞',
    'where available containment functions will be effective...': '在可用的遏制功能有效的情况下...',
    'Time until quarantine breakout': '距离隔离爆发还有一段时间',
    'Suspected multipliers': '可疑乘数',
    'Quarantine lockdown': '隔离锁定',
    'failed': '失败',
    'files not found': '找不到文件',
    'Multiband Compression': '多频带压缩',
    'Disk size (': '磁盘大小(',
    'file and gained': '文件并获得',
    'Disk drive': '磁盘驱动器',
    'has been greatly expanded': '已大大扩展',
    'storage': '存储',
    'anonymous': '匿名',
    'global': '全局',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    'Cryptograms': '密码解析',
    'Number multiples': '数字倍数',
    'Ordered numbers': '有序号码',
    'Hidden passwords': '隐藏密码',
    'Highest reliability': '最高安全性',
    'Research': '研究',
    'Cores': '内核',
    'Disks': '磁盘',
    'Quarantines': '隔离',
    'Hacks': '黑客',
    'Threats': '威胁',
    'Times': '次数',
    'Tasks': '任务',
    'Files': '文件',
    'Scan:': '扫描:',
    'Purge:': '清除:',
    'Overclocking': '超频',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^...and (\d+) more$/, '...还有$1个'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);