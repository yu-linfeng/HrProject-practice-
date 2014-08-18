/*
Navicat MySQL Data Transfer

Source Server         : yu
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : hr

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2014-08-18 10:44:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_dept
-- ----------------------------
DROP TABLE IF EXISTS `t_dept`;
CREATE TABLE `t_dept` (
  `N_DEPT_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门ID',
  `VC_DEPT_CODE` varchar(6) NOT NULL COMMENT '部门编号',
  `VC_DEPT_NAME` varchar(30) NOT NULL COMMENT '部门名称',
  `N_DEPT_TYPE` int(1) NOT NULL COMMENT '部门类型',
  `N_PARENT_ID` int(11) DEFAULT NULL COMMENT '上级部门ID',
  `VC_LOCATION` varchar(200) DEFAULT NULL COMMENT '地址',
  `VC_POST_CODE` varchar(20) DEFAULT NULL COMMENT '邮编',
  `VC_TELEPHONE` varchar(20) DEFAULT NULL COMMENT '联系电话',
  `VC_FAX` varchar(20) DEFAULT NULL COMMENT '传真',
  `VC_MAIL` varchar(50) DEFAULT NULL COMMENT '电子邮件',
  `N_IS_REMOVED` int(1) NOT NULL COMMENT '是否已撤销  0/1 未撤销、已撤销 默认为0',
  `D_REMOVE_DATE` date DEFAULT NULL COMMENT '撤销时间',
  PRIMARY KEY (`N_DEPT_ID`),
  KEY `N_PARENT_ID` (`N_PARENT_ID`),
  KEY `N_DEPT_TYPE` (`N_DEPT_TYPE`),
  CONSTRAINT `t_dept_ibfk_1` FOREIGN KEY (`N_PARENT_ID`) REFERENCES `t_dept` (`N_DEPT_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_dept_ibfk_2` FOREIGN KEY (`N_DEPT_TYPE`) REFERENCES `t_dept_type` (`DEPT_TYPE_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_dept
-- ----------------------------

-- ----------------------------
-- Table structure for t_dept_type
-- ----------------------------
DROP TABLE IF EXISTS `t_dept_type`;
CREATE TABLE `t_dept_type` (
  `DEPT_TYPE_ID` int(11) NOT NULL,
  `DEPT_TYPE_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`DEPT_TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_dept_type
-- ----------------------------
INSERT INTO `t_dept_type` VALUES ('0', '管理部门');
INSERT INTO `t_dept_type` VALUES ('1', '生产部门');

-- ----------------------------
-- Table structure for t_edu_level
-- ----------------------------
DROP TABLE IF EXISTS `t_edu_level`;
CREATE TABLE `t_edu_level` (
  `EDU_LEVEL_ID` int(11) NOT NULL,
  `EDU_LEVEL_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`EDU_LEVEL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_edu_level
-- ----------------------------
INSERT INTO `t_edu_level` VALUES ('1', '高中');
INSERT INTO `t_edu_level` VALUES ('2', '专科');
INSERT INTO `t_edu_level` VALUES ('3', '本科');
INSERT INTO `t_edu_level` VALUES ('4', '硕士');
INSERT INTO `t_edu_level` VALUES ('5', '博士');

-- ----------------------------
-- Table structure for t_employee
-- ----------------------------
DROP TABLE IF EXISTS `t_employee`;
CREATE TABLE `t_employee` (
  `N_EMP_ID` int(11) NOT NULL COMMENT '员工信息ID',
  `N_DEPT` varchar(11) NOT NULL COMMENT '部门ID',
  `N_TITLE` varchar(11) NOT NULL COMMENT '职称ID',
  `N_POST` varchar(11) NOT NULL COMMENT '岗位ID',
  `VC_EMP_NAME` varchar(30) NOT NULL COMMENT '员工姓名',
  `VC_EMP_CODE` varchar(20) NOT NULL COMMENT '员工编号',
  `N_GENDER` varchar(5) NOT NULL COMMENT '员工性别',
  `VC_IDCARD_CODE` varchar(20) NOT NULL COMMENT '身份证号',
  `D_BIRTHDAY` varchar(20) NOT NULL COMMENT '出生年月',
  `VC_NATIVE_PLACE` varchar(50) NOT NULL COMMENT '员工籍贯',
  `N_EDU_LEVEL` varchar(50) NOT NULL COMMENT '员工学历',
  `N_NANTION` varchar(50) NOT NULL COMMENT '员工民族',
  `N_PARTY` varchar(50) NOT NULL COMMENT '政治面貌',
  `N_HEALTH` varchar(50) NOT NULL COMMENT '健康状况',
  `N_REG_TYPE` varchar(50) NOT NULL COMMENT '户口类型',
  `N_STATUS` varchar(50) NOT NULL COMMENT '工作状态',
  PRIMARY KEY (`N_EMP_ID`),
  KEY `N_DEPT_ID` (`N_DEPT`),
  KEY `N_TITLE_ID` (`N_TITLE`),
  KEY `N_POST_ID` (`N_POST`),
  KEY `N_GENDER` (`N_GENDER`),
  KEY `N_EDU_LEVEL` (`N_EDU_LEVEL`),
  KEY `N_NANTION` (`N_NANTION`),
  KEY `N_PARTY` (`N_PARTY`),
  KEY `N_HEALTH` (`N_HEALTH`),
  KEY `N_STATUS` (`N_STATUS`),
  KEY `t_employee_ibfk_9` (`N_REG_TYPE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_employee
-- ----------------------------
INSERT INTO `t_employee` VALUES ('1', '业务部', '软件工程师', '董事长', 'aaa', '4564642112', '男', 'aa', '2014年06月10日', 'aa', 'null', 'null', 'null', 'null', 'null', 'null');
INSERT INTO `t_employee` VALUES ('2', '人资部', '硬件工程师', '董事长', '余林丰', '123456789', '男', '11111111', '2014年06月05日', '重庆', '博士', '珞巴族', '群众', '健康', '城镇户口', '离职');
INSERT INTO `t_employee` VALUES ('3', '网络部', '软件工程师', 'CEO', '余林丰', '000000', '男', '50023200000000', '2014年06月11日', '重庆', '本科', '汉族', '共青团员', '健康', '城镇户口', '转正');

-- ----------------------------
-- Table structure for t_gender
-- ----------------------------
DROP TABLE IF EXISTS `t_gender`;
CREATE TABLE `t_gender` (
  `GENDER_ID` int(11) NOT NULL,
  `GENDER_CONTEXT` varchar(10) DEFAULT NULL,
  KEY `GENDER_ID` (`GENDER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_gender
-- ----------------------------
INSERT INTO `t_gender` VALUES ('0', '男');
INSERT INTO `t_gender` VALUES ('1', '女');

-- ----------------------------
-- Table structure for t_health
-- ----------------------------
DROP TABLE IF EXISTS `t_health`;
CREATE TABLE `t_health` (
  `HEALTH_ID` int(11) NOT NULL,
  `HEALTH_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`HEALTH_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_health
-- ----------------------------
INSERT INTO `t_health` VALUES ('1', '良好');
INSERT INTO `t_health` VALUES ('2', '健康');
INSERT INTO `t_health` VALUES ('3', '一般');
INSERT INTO `t_health` VALUES ('4', '有慢性疾病');

-- ----------------------------
-- Table structure for t_nantion
-- ----------------------------
DROP TABLE IF EXISTS `t_nantion`;
CREATE TABLE `t_nantion` (
  `NANTION_ID` int(11) NOT NULL,
  `NANTION_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`NANTION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_nantion
-- ----------------------------
INSERT INTO `t_nantion` VALUES ('1', '汉族');
INSERT INTO `t_nantion` VALUES ('2', '蒙古族');
INSERT INTO `t_nantion` VALUES ('3', '回族');
INSERT INTO `t_nantion` VALUES ('4', '满族');
INSERT INTO `t_nantion` VALUES ('5', '维吾尔族');
INSERT INTO `t_nantion` VALUES ('6', '苗族');
INSERT INTO `t_nantion` VALUES ('7', '彝族');
INSERT INTO `t_nantion` VALUES ('8', '壮族');
INSERT INTO `t_nantion` VALUES ('9', '布依族');
INSERT INTO `t_nantion` VALUES ('10', '朝鲜族');
INSERT INTO `t_nantion` VALUES ('11', '满族');
INSERT INTO `t_nantion` VALUES ('12', '侗族');
INSERT INTO `t_nantion` VALUES ('13', '瑶族');
INSERT INTO `t_nantion` VALUES ('14', '白族');
INSERT INTO `t_nantion` VALUES ('15', '土家族');
INSERT INTO `t_nantion` VALUES ('16', '哈尼族');
INSERT INTO `t_nantion` VALUES ('17', '哈萨克族');
INSERT INTO `t_nantion` VALUES ('18', '傣族');
INSERT INTO `t_nantion` VALUES ('19', '黎族');
INSERT INTO `t_nantion` VALUES ('20', '傈傈族');
INSERT INTO `t_nantion` VALUES ('21', '佤族');
INSERT INTO `t_nantion` VALUES ('22', '畲族');
INSERT INTO `t_nantion` VALUES ('23', '高山族');
INSERT INTO `t_nantion` VALUES ('24', '拉祜族');
INSERT INTO `t_nantion` VALUES ('25', '水族');
INSERT INTO `t_nantion` VALUES ('26', '东乡族');
INSERT INTO `t_nantion` VALUES ('27', '纳西族');
INSERT INTO `t_nantion` VALUES ('28', '景颇族');
INSERT INTO `t_nantion` VALUES ('29', '柯尔克孜族');
INSERT INTO `t_nantion` VALUES ('30', '土族');
INSERT INTO `t_nantion` VALUES ('31', '达翰尔族');
INSERT INTO `t_nantion` VALUES ('32', '仫佬族');
INSERT INTO `t_nantion` VALUES ('33', '羌族');
INSERT INTO `t_nantion` VALUES ('34', '布朗族');
INSERT INTO `t_nantion` VALUES ('35', '撒拉族');
INSERT INTO `t_nantion` VALUES ('36', '毛南族');
INSERT INTO `t_nantion` VALUES ('37', '仡佬族');
INSERT INTO `t_nantion` VALUES ('38', '阿昌族');
INSERT INTO `t_nantion` VALUES ('39', '锡伯族');
INSERT INTO `t_nantion` VALUES ('40', '普米族');
INSERT INTO `t_nantion` VALUES ('41', '塔吉克族');
INSERT INTO `t_nantion` VALUES ('42', '怒族');
INSERT INTO `t_nantion` VALUES ('43', '乌孜别克族');
INSERT INTO `t_nantion` VALUES ('44', '俄罗斯族');
INSERT INTO `t_nantion` VALUES ('45', '鄂温克族');
INSERT INTO `t_nantion` VALUES ('46', '德昂族');
INSERT INTO `t_nantion` VALUES ('47', '保安族');
INSERT INTO `t_nantion` VALUES ('48', '裕固族');
INSERT INTO `t_nantion` VALUES ('49', '京族');
INSERT INTO `t_nantion` VALUES ('50', '塔塔尔族');
INSERT INTO `t_nantion` VALUES ('51', '独龙族');
INSERT INTO `t_nantion` VALUES ('52', '鄂伦春族');
INSERT INTO `t_nantion` VALUES ('53', '赫哲族');
INSERT INTO `t_nantion` VALUES ('54', '门巴族');
INSERT INTO `t_nantion` VALUES ('55', '珞巴族');
INSERT INTO `t_nantion` VALUES ('56', '基诺族');

-- ----------------------------
-- Table structure for t_party
-- ----------------------------
DROP TABLE IF EXISTS `t_party`;
CREATE TABLE `t_party` (
  `PARTY_ID` int(11) NOT NULL,
  `PARTY` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`PARTY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_party
-- ----------------------------
INSERT INTO `t_party` VALUES ('1', '中共党员');
INSERT INTO `t_party` VALUES ('2', '中共预备党员');
INSERT INTO `t_party` VALUES ('3', '共青团员');
INSERT INTO `t_party` VALUES ('4', '民主党派');
INSERT INTO `t_party` VALUES ('5', '群众');

-- ----------------------------
-- Table structure for t_post
-- ----------------------------
DROP TABLE IF EXISTS `t_post`;
CREATE TABLE `t_post` (
  `N_POST_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '岗位ID',
  `VC_POST_NAME` varchar(30) NOT NULL COMMENT '岗位名称',
  `N_PARENT` varchar(30) NOT NULL COMMENT '上级岗位ID',
  `VC_DUTY` varchar(500) NOT NULL COMMENT '岗位职责',
  `VC_QUALIFICATION` varchar(500) NOT NULL COMMENT '任职资格',
  `VC_PURVIEW` varchar(500) NOT NULL COMMENT '岗位权限',
  `VC_WORK_CONTENT` varchar(500) NOT NULL COMMENT '工作内容',
  PRIMARY KEY (`N_POST_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_post
-- ----------------------------
INSERT INTO `t_post` VALUES ('2', '董事长', '无', '管理董事会', '小学毕业', '至高无上', '开董事会及任命CEO');
INSERT INTO `t_post` VALUES ('3', 'CEO', '董事会', '管理公司', '大学本科及以上', '第一把手', '管理公司的日常运行');
INSERT INTO `t_post` VALUES ('4', 'bbb', 'bb', 'bb', 'b', 'bb', 'b');

-- ----------------------------
-- Table structure for t_reg_type
-- ----------------------------
DROP TABLE IF EXISTS `t_reg_type`;
CREATE TABLE `t_reg_type` (
  `REG_TYPE_ID` int(1) NOT NULL,
  `REG_TYPE_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`REG_TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_reg_type
-- ----------------------------
INSERT INTO `t_reg_type` VALUES ('1', '城镇户口');
INSERT INTO `t_reg_type` VALUES ('2', '农村户口');

-- ----------------------------
-- Table structure for t_status
-- ----------------------------
DROP TABLE IF EXISTS `t_status`;
CREATE TABLE `t_status` (
  `STATUS_ID` int(11) NOT NULL,
  `STATUS_CONTEXT` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`STATUS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_status
-- ----------------------------
INSERT INTO `t_status` VALUES ('1', '试用');
INSERT INTO `t_status` VALUES ('2', '转正');
INSERT INTO `t_status` VALUES ('3', '挂靠');
INSERT INTO `t_status` VALUES ('4', '自动离职');
INSERT INTO `t_status` VALUES ('5', '辞退');

-- ----------------------------
-- Table structure for t_title
-- ----------------------------
DROP TABLE IF EXISTS `t_title`;
CREATE TABLE `t_title` (
  `N_TITLE_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '职称ID',
  `VC_TITLE_NAME` varchar(30) NOT NULL,
  `VC_QUALIFICATION` varchar(500) NOT NULL COMMENT '任职资格',
  `VC_DUTY` varchar(500) NOT NULL COMMENT '职称职责',
  `VC_WORK_TARGET` varchar(500) NOT NULL COMMENT '工作目标',
  PRIMARY KEY (`N_TITLE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_title
-- ----------------------------
INSERT INTO `t_title` VALUES ('1', '工程师', '专科', '协助软件工程师', '协助软件工程师完成工作');
INSERT INTO `t_title` VALUES ('30', '硬件工程师', '大学本科及以上', '开发硬件a', '开发好硬件');
INSERT INTO `t_title` VALUES ('33', '初级程序员', '小学毕业', '看代码', '写代码');
INSERT INTO `t_title` VALUES ('38', '2', '1', '1', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `grade` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '1', '0');
INSERT INTO `user` VALUES ('2', null, null, null);
