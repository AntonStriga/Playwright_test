import { test } from "@playwright/test"

export function step() {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext): typeof originalMethod {
        function replacementMethod(this: any, ...args: any[]) {
            return test.step(
                this.constructor.name + ' -> ' + String(context.name),
                (originalMethod.bind(this, ...args)),
            )
        }
        return replacementMethod
    }
}

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

export const sleep = async (milliseconds: number) => setTimeout(() => null, milliseconds)