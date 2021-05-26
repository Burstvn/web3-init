import React, {useEffect, useState} from "react";
import {Layout, Menu, Button, Modal} from "antd";
import {useWallet} from "use-wallet";

export default function ButtonConnect() {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [status, setStatus] = useState(false)

    const wallet = useWallet()

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const connectWeb3MetaMask = () => {
        wallet.connect("injected")
            .then(() => {
                setStatus(true)
                handleCancel()
            }).catch(res => setStatus(false))
    }

    const connectWeb3TrustWallet = () => {
        wallet.connect("walletconnect")
            .then(res => {
                setStatus(true)
                handleCancel()
            }).catch(res => setStatus(false))
    }

    const disconnect = () => {
        wallet.reset()
        setStatus(false)
        console.log(wallet.account)
    }

    useEffect(() => {
        if (wallet.account) {
            setStatus(true)
            console.log(wallet.account);
        } else {
            setStatus(false)
            console.log(wallet.account);
        }
    }, [wallet.status])
    return (
        <>
            {status ? <Button type="primary" onClick={ disconnect}
                              style={{position: "absolute", top: "13px", right: "20px"}}>
                    disconnect
                </Button> :
                <Button type="primary" onClick={showModal} style={{position: "absolute", top: "13px", right: "20px"}}>
                    Connect
                </Button>}
            <Modal
                title="Wallet"
                visible={visible}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <Button
                    type="primary"
                    style={{width: "100%", marginBottom: "20px"}}
                    onClick={connectWeb3MetaMask}
                >
                    MetaMask
                </Button>
                <Button
                    type="primary"
                    style={{width: "100%"}}
                    onClick={connectWeb3TrustWallet}
                >
                    TrustWallet
                </Button>
            </Modal>
        </>
    );
}
