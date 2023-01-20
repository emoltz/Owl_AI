import {Button, Modal, Text} from "@nextui-org/react";

import React from 'react';

export default function MyStuffModal(data, cardID, setVisible, bindings) {
    return (
        <div>

            <Modal
                scroll={true}
                width={"600px"}
                blur
                aria-label="Modal"
                // open={modalVisible}
                // onClose={closeHandler}
                {...bindings}
            >


                {data.map((doc) => {

                    if (doc.id === cardID) {
                        return (
                            <div key={doc.id}>
                                <Modal.Header id={"modal-title"} size={18}>
                                    <Text h3>{doc.title}</Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Text id={"modal-description"}>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                                        commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
                                        ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                                        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
                                        consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et.
                                    </Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onPress={() => setVisible(false)}>
                                        close
                                    </Button>
                                </Modal.Footer>

                            </div>
                        )
                    }
                })}


            </Modal>
        </div>
    );
};

export default MyComponent;
