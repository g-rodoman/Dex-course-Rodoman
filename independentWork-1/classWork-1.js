//file WorkHere.js
///https://codesandbox.io/s/classwork-2-rmp2l?file=/src/WorkHere.js
export const dataProcessingAboutSalary = (f, s) => {
  return +f + +s
};

export const calculateCashback = (isCashback, sum, cb) => {
if(isCashback){
  sum=sum*cb;
}
};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (nameWorker, bDay, salary) => {
/* � ������� �������� ������ � ������ ������������, � ������: 
���/�������, ���� �������� � ��. �� ������ �������� �������, �������:
���������� ����������� ���� � ����� �������� ����������
���� ���� ���������, �������� �� ���������� �� ���� �� ������� 
������� ������� ��������, ��� ������ ���������� {...}�
���������� ��������� ��������� �������� �������� ������: � 10% ��
 �� ���������� ������������ ��������� (���� �������� �� �����). 
 � ����������� ������� ���������� ���������� ����� ���� 213, 157 
 ���. ����� ������� ����� �������� - 220, 160 ���. �������������� 
 ���� ��������.  */
let today= new Date()
let birthDate= new Date(bDay)
let prem
let workerDay=birthDate.getDate()
let workerMonth= birthDate.getMonth()
if(today.getDate()===workerDay && today.getMonth()===workerMonth){
  prem=Math.ceil(((salary/10)+(workerDay*(workerMonth+1)))/10)*10
  let strCongrat=`� ${nameWorker} ������� ��������, ��� ������ ���������� ${prem}`
  return strCongrat
};
return '��� ������'
}


