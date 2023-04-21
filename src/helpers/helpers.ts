import { test } from "@playwright/test"

export function step(stepPrefix?: string) {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext): typeof originalMethod {
        function replacementMethod(this: any, ...args: any[]) {
            return test.step(
                (stepPrefix ?? this.constructor.name) + ' -> ' + String(context.name),
                (originalMethod.bind(this, ...args)),
            )
        }
        return replacementMethod
    }
}