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

export const getHolidaysNotifications = (f, s) => {



};

export const getHolidayPrizes = (nameWorker, bDay, salary) => {

// (f, s, t)
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

 /*
���� ������� ���� ���� �� ���������� 
`� ${name} ������� ��������, ��� ������ ���������� ${prem}�
prem=salary*0.1+prem2
prem2=(round((day*month)/10))*10
 */
//���� �� ������ ����������..
let today= new Date()
let prem
let prem2
let workerDay
let workerMonth

if(today==bDay){
  prem=salary*0,1
  workerDay=bDay.getDay();
  workerMonth=bDay.getMonth();
  prem2=(Math.round((workerDay*workerMonth)/10))*10
  prem+=prem2
  let strCongrat=`� ${nameWorker} ������� ��������, ��� ������ ���������� ${prem}`
  return strCongrat
};

}
