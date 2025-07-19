import React, { Component } from 'react'

type Props = {
    className?: string;
    children?: React.ReactNode;
}

export default class Modal extends Component<Props> {

  render() {
    
    const { className, children } = this.props;

    return (
      <div className={`!min-h-[24rem] !min-w-[30rem] bg-white p-6` + className}>
        {children}
      </div>
    )
  }
}
