/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:36:28
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 21:36:52
 * @Description:
 */
import React from 'react';
import { Button, Modal } from 'antd';
import ModalContent from './content';
import './index.less';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="example-modal-content"
        >
          <ModalContent />
        </Modal>
      </div>
    );
  }
}

export default () => <App />;
