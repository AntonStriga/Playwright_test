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