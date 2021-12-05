import React, { Component, ComponentType, ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent
export class ClassComponent extends React.Component {
  render() {
    return <div>ClassComponent</div>;
  }
}
//=====================================================
//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent
const FuncComponent = () => <div>FuncComponent</div>;
//=====================================================
//TODO: Перепешите компоненты выше на prop text
// в text передайте старые значения
interface IString {
  text: string;
}
export class ClassComponent1 extends React.Component<IString> {
  render() {
    return <div>{this.props.text}</div>;
  }
}
//=====================================================
const FuncComponent1 = (props: IString) => {
  return <div>{props.text}</div>;
};
//=====================================================
//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag
interface IBool {
  flag: boolean;
}
const ConditionalComponent = (props: IBool) => {
  return <div>{props.flag && <GoogleLogoComponent />}</div>;
};
//=====================================================
//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
interface IFuncVoid {
  func: () => void;
}
const ComponentWithFunction = (props: IFuncVoid) => {
  return <button onClick={props.func}>Button: PRESS ME PLS!!1111</button>;
};
const ComponentWithFunction1 = (props: IFuncVoid) => {
  return <div onClick={props.func}>Div: PRESS ME PLS!!1111</div>;
};
//=====================================================
//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div
export class ComponentWithChild extends React.Component {
  render() {
    return <div>COMPONENT WITH CHILD:{this.props.children}</div>;
  }
}
//=====================================================
//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent
interface IRender {
  renderFunc: () => JSX.Element;
  renderComponent: ComponentType;
}
export class ComponentWithRenders extends React.Component<IRender> {
  render() {
    return (
      <div>
        -----------------------------
        <div />
        COMPONENT WITH <div />
        renderFunc and RenderComponent:
        {this.props.renderFunc()}
        <this.props.renderComponent />
        <div />
        -----------------------------
      </div>
    );
  }
}
//=====================================================

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}

//TODO: Добавьте component RenderAll
// export const RenderAll1=()=>{
// return <div>123</div>
//   }
interface ITimer {
  timer: number;
}
export class RenderAll extends React.Component<ITimer> {
  render() {
    return (
      <div>
        <ClassComponent />
        <FuncComponent />
        <FuncComponent1 text="FuncComponent1" />
        <ClassComponent1 text="ClassComponent1" />
        <ConditionalComponent flag={true} />
        <ComponentWithFunction func={func} />
        <ComponentWithFunction1 func={func} />
        <ComponentWithChild>
          <ClassComponent />
          <FuncComponent />
        </ComponentWithChild>
        <ComponentWithRenders
          renderFunc={renderFunc}
          renderComponent={TestComponent}
        />
        <p />
        <div>TIMER: {this.props.timer}</div>
      </div>
    );
  }
}
// Добавьте prop timer и выведите его
