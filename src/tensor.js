import * as tf from '@tensorflow/tfjs';

export class Tensor {

    constructor(){}

    test(){
        tf.tensor([1, 2, 3, 4]).print();
    }
};

