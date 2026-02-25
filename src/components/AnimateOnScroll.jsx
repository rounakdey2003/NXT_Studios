'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * AnimateOnScroll - Wrapper component for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fade', 'slide-up', 'slide-left', 'slide-right', 'scale'
 * @param {number} props.delay - Animation delay in seconds (for stagger effects)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.as - HTML element to render (default: 'div')
 * @param {number} props.threshold - Intersection threshold
 * @param {Object} props.style - Additional inline styles
 */
const AnimateOnScroll = ({
    children,
    animation = 'slide-up',
    delay = 0,
    className = '',
    as: Component = 'div',
    threshold = 0.1,
    style = {},
    ...props
}) => {
    const [ref, isVisible] = useScrollAnimation({ threshold });

    const animationClass = {
        'fade': 'animate-fade',
        'slide-up': 'animate-slide-up',
        'slide-left': 'animate-slide-left',
        'slide-right': 'animate-slide-right',
        'scale': 'animate-scale',
        'default': 'animate-on-scroll'
    }[animation] || 'animate-on-scroll';

    return (
        <Component
            ref={ref}
            className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
            style={{
                transitionDelay: delay ? `${delay}s` : undefined,
                ...style
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default AnimateOnScroll;
