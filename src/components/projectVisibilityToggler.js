import React, { useState } from 'react';

const ProjectVisibilityToggler = (component, visibility = false) => {

    const [visibile, setVisibility] = useState(() => visibility);

    return [
        visibile ? component : null,
        () => setVisibility((v) => !v)
    ]
}

export default ProjectVisibilityToggler;