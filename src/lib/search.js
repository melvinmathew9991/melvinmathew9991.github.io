// Project search match, shared by the /projects/ search box and the Skills tag counts on the home page,
// so a tag's count always equals what the search shows for the same keyword.
// Case-insensitive substring match on the title, the outcome or any stack item.
export function matchesQuery(project, query) {
  const q = query.trim().toLowerCase();
  return !q || [project.title, project.outcome, ...project.stack].some((t) => t.toLowerCase().includes(q));
}
