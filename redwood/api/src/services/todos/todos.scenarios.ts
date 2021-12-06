import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { title: 'String2839957', order: 'String1628450' } },
    two: { data: { title: 'String5635054', order: 'String4487800' } },
  },
})

export type StandardScenario = typeof standard
