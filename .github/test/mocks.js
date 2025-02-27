import { vi } from "vitest";

// Partial mock of `github` parameter passed into github-script actions
export function createMockGithub() {
  return {
    rest: {
      actions: {
        listWorkflowRunArtifacts: vi
          .fn()
          .mockResolvedValue({ data: { artifacts: [] } }),
        listWorkflowRunsForRepo: vi
          .fn()
          .mockResolvedValue({ data: { workflow_runs: [] } }),
      },
      checks: {
        listForRef: vi.fn().mockResolvedValue({ data: { check_runs: [] } }),
      },
      issues: {
        addLabels: vi.fn(),
        listLabelsOnIssue: vi.fn().mockResolvedValue({ data: [] }),
        removeLabel: vi.fn(),
      },
      pulls: {
        get: vi.fn(),
      },
    },
  };
}

// Partial mock of `core` parameter passed into to github-script actions
export function createMockCore() {
  return {
    debug: vi.fn(console.debug),
    info: vi.fn(console.log),
    setOutput: vi.fn((name, value) =>
      console.log(`setOutput('${name}', '${value}')`),
    ),
  };
}
